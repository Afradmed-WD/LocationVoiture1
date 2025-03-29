// Stocker le token
export const setToken = (token) => {
    localStorage.setItem("token", token);
};

// Récupérer le token
export const getToken = () => {
    return localStorage.getItem("token");
};

// Supprimer le token (déconnexion)
export const removeToken = () => {
    localStorage.removeItem("token");
    localStorage.removeItem("user");
};

// Vérifier si l'utilisateur est connecté
export const isAuthenticated = () => {
    return !!getToken();
};
