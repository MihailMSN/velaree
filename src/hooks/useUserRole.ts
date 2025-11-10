import { useQuery } from '@tanstack/react-query';
import { supabase } from '@/integrations/supabase/client';
import { useAuth } from '@/contexts/AuthContext';

export const useUserRole = () => {
  const { user } = useAuth();

  const { data: roles, isLoading } = useQuery({
    queryKey: ['user-roles', user?.id],
    queryFn: async () => {
      if (!user) return [];
      
      const { data, error } = await supabase
        .from('user_roles')
        .select('role, business_account_id')
        .eq('user_id', user.id);

      if (error) throw error;
      return data;
    },
    enabled: !!user,
  });

  const isPlatformAdmin = roles?.some(r => r.role === 'platform_admin') ?? false;
  const isBusinessAdmin = roles?.some(r => r.role === 'business_admin') ?? false;
  const isBusinessUser = roles?.some(r => r.role === 'business_user') ?? false;

  return {
    roles: roles ?? [],
    isPlatformAdmin,
    isBusinessAdmin,
    isBusinessUser,
    isLoading,
  };
};
