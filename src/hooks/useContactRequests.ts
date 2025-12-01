import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { toast } from 'sonner';

export const useContactRequests = () => {
  const queryClient = useQueryClient();

  const { data: contactRequests, isLoading } = useQuery({
    queryKey: ['contact-requests'],
    queryFn: async () => {
      const { data, error } = await supabase
        .from('contact_requests')
        .select('*')
        .order('created_at', { ascending: false });

      if (error) throw error;
      return data;
    },
    refetchInterval: 30000, // Refetch every 30 seconds
  });

  const updateStatus = useMutation({
    mutationFn: async ({ id, status }: { id: string; status: string }) => {
      const { error } = await supabase
        .from('contact_requests')
        .update({ status })
        .eq('id', id);

      if (error) throw error;

      // Log admin action
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'update_status',
          resource_type: 'contact_request',
          resource_id: id,
          details: { status },
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
      toast.success('Status updated successfully');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update status');
    },
  });

  const deleteRequest = useMutation({
    mutationFn: async (id: string) => {
      const { error } = await supabase
        .from('contact_requests')
        .delete()
        .eq('id', id);

      if (error) throw error;

      // Log admin action
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'delete',
          resource_type: 'contact_request',
          resource_id: id,
        });
      }
    },
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
      toast.success('Contact request deleted');
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete contact request');
    },
  });

  const bulkUpdateStatus = useMutation({
    mutationFn: async ({ ids, status }: { ids: string[]; status: string }) => {
      const { error } = await supabase
        .from('contact_requests')
        .update({ status })
        .in('id', ids);

      if (error) throw error;

      // Log admin action
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'bulk_update_status',
          resource_type: 'contact_request',
          details: { ids, status, count: ids.length },
        });
      }
    },
    onSuccess: (_, variables) => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
      toast.success(`Updated status for ${variables.ids.length} request(s)`);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to update status');
    },
  });

  const bulkDelete = useMutation({
    mutationFn: async (ids: string[]) => {
      const { error } = await supabase
        .from('contact_requests')
        .delete()
        .in('id', ids);

      if (error) throw error;

      // Log admin action
      const { data: { user } } = await supabase.auth.getUser();
      if (user) {
        await supabase.from('admin_actions').insert({
          user_id: user.id,
          action: 'bulk_delete',
          resource_type: 'contact_request',
          details: { ids, count: ids.length },
        });
      }
    },
    onSuccess: (_, ids) => {
      queryClient.invalidateQueries({ queryKey: ['contact-requests'] });
      toast.success(`Deleted ${ids.length} request(s)`);
    },
    onError: (error: any) => {
      toast.error(error.message || 'Failed to delete requests');
    },
  });

  return {
    contactRequests: contactRequests ?? [],
    isLoading,
    updateStatus,
    deleteRequest,
    bulkUpdateStatus,
    bulkDelete,
  };
};
