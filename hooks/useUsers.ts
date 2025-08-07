import { fetchUsers } from '@/api/usersApi';
import { useQuery } from '@tanstack/react-query';

export const useUsers = () => {
    return useQuery({
        queryKey: ['users'],
        queryFn: fetchUsers
    });
};
