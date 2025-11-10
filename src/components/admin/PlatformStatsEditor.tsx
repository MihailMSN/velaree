import React, { useState } from 'react';
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { Label } from '@/components/ui/label';
import { toast } from 'sonner';
import { format } from 'date-fns';

const PlatformStatsEditor = () => {
  const queryClient = useQueryClient();
  const [editingMetric, setEditingMetric] = useState<string | null>(null);
  const [editValue, setEditValue] = useState('');

  const { data: stats, isLoading } = useQuery({
    queryKey: ['platform-stats'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('platform_stats')
        .select('*')
        .order('metric_name');

      if (error) throw error;
      return data;
    },
  });

  const updateStat = useMutation({
    mutationFn: async ({ id, value }: { id: string; value: number }) => {
      const { error } = await supabase
        .from('platform_stats')
        .update({ value, updated_at: new Date().toISOString() })
        .eq('id', id);

      if (error) throw error;

      // Log admin action
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'update_stat',
          resource_type: 'platform_stat',
          resource_id: id,
          details: { value },
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['platform-stats'] });
      toast.success('Stat updated successfully');
      setEditingMetric(null);
      setEditValue('');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update stat');
    },
  });

  const handleSave = (stat: any) => {
    const newValue = parseFloat(editValue);
    if (isNaN(newValue)) {
      toast.error('Please enter a valid number');
      return;
    }
    updateStat.mutate({ id: stat.id, value: newValue });
  };

  const formatMetricName = (name: string) => {
    return name
      .split('_')
      .map(word => word.charAt(0).toUpperCase() + word.slice(1))
      .join(' ');
  };

  if (isLoading) {
    return <div className="flex justify-center p-8">Loading...</div>;
  }

  return (
    <Card>
      <CardHeader>
        <CardTitle>Platform Statistics</CardTitle>
        <CardDescription>Update platform metrics displayed on the homepage</CardDescription>
      </CardHeader>
      <CardContent className="space-y-6">
        {stats?.map((stat) => (
          <div key={stat.id} className="flex items-center justify-between p-4 border rounded-lg">
            <div className="flex-1">
              <Label className="text-base font-semibold">{formatMetricName(stat.metric_name)}</Label>
              <p className="text-2xl font-bold text-primary mt-1">{stat.value.toLocaleString()}</p>
              <p className="text-xs text-muted-foreground mt-1">
                Last updated: {format(new Date(stat.updated_at), 'MMM d, yyyy HH:mm')}
              </p>
            </div>
            
            {editingMetric === stat.id ? (
              <div className="flex gap-2 items-center">
                <Input
                  type="number"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  className="w-32"
                  placeholder="New value"
                />
                <Button onClick={() => handleSave(stat)} size="sm">
                  Save
                </Button>
                <Button 
                  onClick={() => {
                    setEditingMetric(null);
                    setEditValue('');
                  }} 
                  variant="outline" 
                  size="sm"
                >
                  Cancel
                </Button>
              </div>
            ) : (
              <Button
                onClick={() => {
                  setEditingMetric(stat.id);
                  setEditValue(stat.value.toString());
                }}
                variant="outline"
              >
                Edit
              </Button>
            )}
          </div>
        ))}
      </CardContent>
    </Card>
  );
};

export default PlatformStatsEditor;
