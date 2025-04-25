export const isAuthenticated = () => {
    if (typeof window === "undefined") return false;
    return !!localStorage.getItem("token");
  };
  
  export const getAuthToken = () => {
    if (typeof window === "undefined") return null;
    return localStorage.getItem("token");
  };
  
  export const logout = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
  };
  