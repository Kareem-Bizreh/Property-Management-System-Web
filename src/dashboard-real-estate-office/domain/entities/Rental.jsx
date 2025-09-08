export class Rental {
    constructor(data) {
        this.id = data.id;
        this.title = data.title;
        this.startDate = data.startDate;
        this.endDate = data.endDate;
        this.location = data.location;
        this.phone = data.phone;
        this.status = data.status;
        this.imageUrl = data.imageUrl;
        this.invoices = data.invoices;
    }
}
