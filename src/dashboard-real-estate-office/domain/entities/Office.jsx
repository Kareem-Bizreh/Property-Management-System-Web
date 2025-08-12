export class Office {
    constructor(data) {
        this.name = data.name;
        this.image = data.image;
        this.city = data.city;
        this.region = data.region;
        this.contactNumber = data.contactNumber;
        this.openingTime = data.openingTime;
        this.closingTime = data.closingTime;
        this.facebookAccount = data.facebookAccount;
        this.whatsappAccount = data.whatsappAccount;
        this.instagramAccount = data.instagramAccount;
        this.reservationPeriod = data.reservationPeriod;
        this.depositPrice = data.depositPrice;
        this.depositRate = data.depositRate;
        this.feesRate = data.feesRate;
        this.manualPayment = data.manualPayment;
        this.electronicPayment = data.electronicPayment;
    }
}