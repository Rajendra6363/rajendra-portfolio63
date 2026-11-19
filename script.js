function openFolder(folderKey, folderTitle) {
    const foldersView = document.getElementById("folders-view");
    const contentsView = document.getElementById("folder-contents-view");
    const activeFolderName = document.getElementById("active-folder-name");
    const subtitle = document.getElementById("video-section-subtitle");
    const videoItems = document.querySelectorAll(".video-item");

    // Hide the folder cards grid and show the inside-folder view
    foldersView.classList.add("hidden");
    contentsView.classList.remove("hidden");

    // Update breadcrumb title and subtitle
    activeFolderName.textContent = folderTitle;
    subtitle.textContent = `Showing videos inside "${folderTitle}"`;

    // Show ONLY videos matching the clicked folder
    videoItems.forEach((item) => {
        if (item.getAttribute("data-folder") === folderKey) {
            item.classList.remove("hidden");
        } else {
            item.classList.add("hidden");
        }
    });
}

function closeFolder() {
    const foldersView = document.getElementById("folders-view");
    const contentsView = document.getElementById("folder-contents-view");
    const subtitle = document.getElementById("video-section-subtitle");

    // Stop any playing videos by resetting iframe src
    document.querySelectorAll(".video-item iframe").forEach((iframe) => {
        const currentSrc = iframe.src;
        iframe.src = currentSrc;
    });

    // Show the folder cards again and hide the video view
    contentsView.classList.add("hidden");
    foldersView.classList.remove("hidden");
    subtitle.textContent = "Click a folder to open and watch videos in that category.";
}
