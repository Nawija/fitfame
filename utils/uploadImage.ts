export const uploadImage = async (file: File) => {
    const formData = new FormData();
    formData.append("file", file);

    const response = await fetch("/api/upload-image", {
        method: "POST",
        body: formData,
    });

    const data = await response.json();
    if (data.url) {
        const imageUrl = `/images/przepisy/${data.url}`;
        return imageUrl;
    } else {
        throw new Error("Image upload failed");
    }
};
