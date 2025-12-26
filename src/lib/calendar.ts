export function createGoogleCalendarUrl(meetingDetails: {
    date: Date;
    timeSlot: string;
    name: string;
    description: string;
    meetingType: "physical" | "online" | null;
}): string | null {
    if (!meetingDetails.date || !meetingDetails.timeSlot) {
        return null;
    }

    // Parse time string "09:00 AM" or "09:00"
    const [startTime] = meetingDetails.timeSlot.split(" - ");

    let hours = 0;
    let minutes = 0;

    // Check if it's 12-hour format with AM/PM
    const timeMatch = startTime.match(/(\d+):(\d+)\s*(AM|PM)?/i);

    if (timeMatch) {
        hours = parseInt(timeMatch[1], 10);
        minutes = parseInt(timeMatch[2], 10);
        const modifier = timeMatch[3]?.toUpperCase(); // AM or PM

        if (modifier === "PM" && hours < 12) {
            hours += 12;
        }
        if (modifier === "AM" && hours === 12) {
            hours = 0;
        }
    } else {
        // Fallback for simple "HH:MM" parsable by split
        const parts = startTime.split(":").map(Number);
        hours = parts[0];
        minutes = parts[1];
    }

    const startDateTime = new Date(meetingDetails.date);
    startDateTime.setHours(hours, minutes, 0, 0);

    const endDateTime = new Date(startDateTime.getTime() + 60 * 60 * 1000);

    const formatDate = (date: Date) => date.toISOString().replace(/-|:|\.\d{3}/g, "");

    const params = new URLSearchParams({
        action: "TEMPLATE",
        text: `Consultation with ${meetingDetails.name}`,
        dates: `${formatDate(startDateTime)}/${formatDate(endDateTime)}`,
        details: meetingDetails.description,
        location: meetingDetails.meetingType === "physical" ? "Our Office" : "Online",
    });

    return `https://www.google.com/calendar/render?${params.toString()}`;
}
