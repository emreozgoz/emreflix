import publicClient from "../publicClient";

const personEndpoints = {
  detail: ({ personId }) => `/person/${personId}`,
  medias: ({ personId }) => `/person/${personId}/medias`,
};

const PersonApi = {
  detail: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        personEndpoints.detail({ personId })
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
  medias: async ({ personId }) => {
    try {
      const response = await publicClient.get(
        personEndpoints.medias({ personId })
      );
      return { response };
    } catch (error) {
      return { error };
    }
  },
};

export default PersonApi;