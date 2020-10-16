export const apiMethod = async (data) => {
    return await fetch(`/user/${data}`, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' }
        })
        .then(response => response.json())
        .catch(response => response);
};
