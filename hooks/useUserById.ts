import { useQuery } from "@tanstack/react-query";
import { fetchUserById } from "@/api/usersApi";
export const useUserById = (id: string) => {
    return useQuery({
        queryKey: ["user", id],
        queryFn: () => fetchUserById(id),
        enabled: !!id, // fetch data id whenever id present
    });
};
