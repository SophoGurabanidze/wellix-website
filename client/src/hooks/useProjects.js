
import { useQuery, useMutation, useQueryClient } from "@tanstack/react-query";
import { fetcher } from "../utils/fetcher";

// Get all completed projects
export const useProjects = () => {
  return useQuery({
    queryKey: ["projects"],
    queryFn: () => fetcher("/completed-projects"),
  });
};



// Get a single project by ID
export const useProject = (id) => {
  return useQuery({
    queryKey: ["project", id],
    queryFn: () => fetcher(`/completed-projects/${id}`),
    enabled: !!id,
  });
};

// Add new project
export const useAddProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (newProject) =>
      fetcher("/completed-projects", {
        method: "POST",
        body: JSON.stringify(newProject),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};

// Update existing project
export const useUpdateProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: ({ id, updated }) =>
      fetcher(`/completed-projects/${id}`, {
        method: "PUT",
        body: JSON.stringify(updated),
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};





// Delete project
export const useDeleteProject = () => {
  const queryClient = useQueryClient();
  return useMutation({
    mutationFn: (id) =>
      fetcher(`/completed-projects/${id}`, {
        method: "DELETE",
      }),
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["projects"] });
    },
  });
};
