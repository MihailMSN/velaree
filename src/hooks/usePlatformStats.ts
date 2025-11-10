import { useQuery } from "@tanstack/react-query";
import { supabase } from "@/integrations/supabase/client";

interface PlatformStat {
  metric_name: string;
  value: number;
}

export const usePlatformStats = () => {
  return useQuery({
    queryKey: ["platform-stats"],
    queryFn: async () => {
      const { data, error } = await supabase
        .from("platform_stats")
        .select("metric_name, value");

      if (error) throw error;

      // Transform array into object for easy access
      const stats = (data as PlatformStat[]).reduce((acc, stat) => {
        acc[stat.metric_name] = stat.value;
        return acc;
      }, {} as Record<string, number>);

      return {
        bookings_today: stats.bookings_today || 0,
        searches_hour: stats.searches_hour || 0,
        response_time: stats.response_time || 0,
      };
    },
    refetchInterval: 5000, // Refetch every 5 seconds for real-time feel
    staleTime: 3000,
  });
};
