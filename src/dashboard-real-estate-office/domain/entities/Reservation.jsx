export class Reservation {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.status = data.status;
        this.buyer_phone = data.buyer_phone;
        this.location = data.location;
        this.selling_price = data.selling_price;
        this.image_url = data.image_url;
        this.created_at = data.created_at;
        this.end_booking = data.end_booking;
        this.financial_records = data.financial_records;
    }
}
