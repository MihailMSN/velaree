import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { format } from 'date-fns';
import { Skeleton } from '@/components/ui/skeleton';
import { Plus, Trash2 } from 'lucide-react';
const PlatformStatsEditor = () => {
  const queryClient = useQueryClient();
  const [editingMetric, setEditingMetric] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');
  const [isCreating, setIsCreating] = useState(false);
  const [newMetricName, setNewMetricName] = useState('');
  const [newMetricValue, setNewMetricValue] = useState('');
  const {
    data: stats,
    isLoading
  } = useQuery({
    queryKey: ['platform-stats-admin'],
    queryFn: async () => {
      const {
        data,
        error
      } = await supabase.from('platform_stats').select('*').order('metric_name');
      if (error) throw error;
      return data;
    }
  });
  const updateStat = useMutation({
    mutationFn: async ({
      id,
      value
    }: {
      id: string;
      value: number;
    }) => {
      const {
        error
      } = await supabase.from('platform_stats').update({
        value,
        updated_at: new Date().toISOString()
      }).eq('id', id);
      if (error) throw error;
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'update_stat',
          resource_type: 'platform_stat',
          resource_id: id,
          details: {
            value
          }
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['platform-stats-admin']
      });
      queryClient.invalidateQueries({
        queryKey: ['platform-stats']
      });
      toast.success('Stat updated successfully');
      setEditingMetric(null);
      setEditValue('');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update stat');
    }
  });
  const createStat = useMutation({
    mutationFn: async ({
      metric_name,
      value
    }: {
      metric_name: string;
      value: number;
    }) => {
      const {
        data,
        error
      } = await supabase.from('platform_stats').insert({
        metric_name,
        value
      }).select().single();
      if (error) throw error;
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'create_stat',
          resource_type: 'platform_stat',
          resource_id: data.id,
          details: {
            metric_name,
            value
          }
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['platform-stats-admin']
      });
      queryClient.invalidateQueries({
        queryKey: ['platform-stats']
      });
      toast.success('Metric created successfully');
      setIsCreating(false);
      setNewMetricName('');
      setNewMetricValue('');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to create metric');
    }
  });
  const deleteStat = useMutation({
    mutationFn: async (id: string) => {
      const {
        error
      } = await supabase.from('platform_stats').delete().eq('id', id);
      if (error) throw error;
      const {
        data: {
          user
        }
      } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'delete_stat',
          resource_type: 'platform_stat',
          resource_id: id,
          details: {}
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({
        queryKey: ['platform-stats-admin']
      });
      queryClient.invalidateQueries({
        queryKey: ['platform-stats']
      });
      toast.success('Metric deleted successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete metric');
    }
  });
  const handleSave = (stat: any) => {
    const newValue = parseFloat(editValue);
    if (isNaN(newValue)) {
      toast.error('Please enter a valid number');
      return;
    }
    updateStat.mutate({
      id: stat.id,
      value: newValue
    });
  };
  const handleCreate = () => {
    const trimmedName = newMetricName.trim().toLowerCase().replace(/\s+/g, '_');
    if (!trimmedName) {
      toast.error('Please enter a metric name');
      return;
    }
    const value = parseFloat(newMetricValue);
    if (isNaN(value)) {
      toast.error('Please enter a valid number');
      return;
    }
    createStat.mutate({
      metric_name: trimmedName,
      value
    });
  };
  const formatMetricName = (name: string) => {
    return name.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ');
  };
  if (isLoading) {
    return <Card>
        <CardHeader>
          <CardTitle>Platform Statistics</CardTitle>
          <CardDescription>Update platform metrics displayed on the homepage</CardDescription>
        </CardHeader>
        <CardContent className="space-y-6">
          {[1, 2, 3].map(i => <div key={i} className="flex items-center justify-between p-4 border rounded-lg">
              <div className="flex-1 space-y-2">
                <Skeleton className="h-5 w-32" />
                <Skeleton className="h-8 w-24" />
                <Skeleton className="h-3 w-40" />
              </div>
              <Skeleton className="h-9 w-16" />
            </div>)}
        </CardContent>
      </Card>;
  }
  return <Card>
      <CardHeader className="flex flex-row items-center justify-between">
        <div>
          <CardTitle>Platform Statistics</CardTitle>
          <CardDescription>Update platform metrics displayed on the homepage</CardDescription>
        </div>
        {!isCreating && <Button onClick={() => setIsCreating(true)} size="sm" className="bg-secondary-foreground">
            <Plus className="h-4 w-4 mr-1" />
            Add Metric
          </Button>}
      </CardHeader>
      <CardContent className="space-y-6">
        {isCreating && <div className="p-4 border rounded-lg border-dashed border-primary bg-primary/5">
            <Label className="text-base font-semibold mb-3 block">New Metric</Label>
            <div className="flex flex-col sm:flex-row gap-3">
              <Input value={newMetricName} onChange={e => setNewMetricName(e.target.value)} placeholder="Metric name (e.g. active_users)" className="flex-1" />
              <Input type="number" value={newMetricValue} onChange={e => setNewMetricValue(e.target.value)} placeholder="Initial value" className="w-full sm:w-32" />
              <div className="flex gap-2">
                <Button onClick={handleCreate} size="sm" disabled={createStat.isPending}>
                  {createStat.isPending ? 'Creating...' : 'Create'}
                </Button>
                <Button onClick={() => {
              setIsCreating(false);
              setNewMetricName('');
              setNewMetricValue('');
            }} variant="outline" size="sm">
                  Cancel
                </Button>
              </div>
            </div>
          </div>}

        {stats?.map(stat => <div key={stat.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <Label className="text-base font-semibold">{formatMetricName(stat.metric_name)}</Label>
              <p className="text-2xl font-bold text-primary mt-1">{stat.value.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Last updated: {format(new Date(stat.updated_at), 'MMM d, yyyy HH:mm')}
              </p>
            </div>
            
            {editingMetric === stat.id ? <div className="flex gap-2 items-center">
                <Input type="number" value={editValue} onChange={e => setEditValue(e.target.value)} className="w-32" placeholder="New value" />
                <Button onClick={() => handleSave(stat)} size="sm">
                  Save
                </Button>
                <Button onClick={() => {
            setEditingMetric(null);
            setEditValue('');
          }} variant="outline" size="sm">
                  Cancel
                </Button>
              </div> : <div className="flex gap-2">
                <Button onClick={() => {
            setEditingMetric(stat.id);
            setEditValue(stat.value.toString());
          }} variant="outline">
                  Edit
                </Button>
                <Button onClick={() => deleteStat.mutate(stat.id)} variant="outline" size="icon" className="text-destructive hover:text-destructive" disabled={deleteStat.isPending}>
                  <Trash2 className="h-4 w-4" />
                </Button>
              </div>}
          </div>)}
      </CardContent>
    </Card>;
};
export default PlatformStatsEditor;