function stringToColor(string) {
    if (!string) return "#000000"; // Default color if string is undefined or empty
    let hash = 0;
    let i;

    for (i = 0; i < string.length; i += 1) {
        hash = string.charCodeAt(i) + ((hash << 5) - hash);
    }

    let color = '#';

    for (i = 0; i < 3; i += 1) {
        const value = (hash >> (i * 8)) & 0xff;
        color += `00${value.toString(16)}`.slice(-2);
    }

    return color;
}

export function stringAvatar(name) {
    const initials = name ? name.charAt(0).toUpperCase() : '?';
    return {
        sx: {
            bgcolor: stringToColor(name),
        },
        children: initials,
    };
}
