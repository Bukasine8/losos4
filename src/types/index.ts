export interface BookingData {
    client_name: string;
    client_email: string;
    client_phone: string;
    company_name?: string;
    meeting_type: "physical" | "online";
    meeting_date: string;
    meeting_time: string;
    additional_notes?: string;
}
