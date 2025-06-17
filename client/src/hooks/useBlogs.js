
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "../utils/fetcher";

// Get all blogs
export const useBlogs = () => {
  return useQuery({
    queryKey: ["blogs"],
    queryFn: () => fetcher("/blogs"),
  });
};

// Get one blog by ID
export const useBlog = (id) => {
  return useQuery({
    queryKey: ["blog", id],
    queryFn: () => fetcher(`/blogs/${id}`),
    enabled: !!id, 
  });
};




// Add blog
export const useAddBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newBlog) =>
      fetcher("/blogs", {
        method: "POST",
        body: JSON.stringify(newBlog),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};



// Update blog
export const useUpdateBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updated }) =>
      fetcher(`/blogs/${id}`, {
        method: "PUT",
        body: JSON.stringify(updated),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};



// Delete blog
export const useDeleteBlog = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      fetcher(`/blogs/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["blogs"] });
    },
  });
};
