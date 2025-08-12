export const formatPrice = (price) => {
    if (!price) return '0';

    let num = Number(price);
    if (isNaN(num)) return price;
    num = num.toFixed(0);

    if (num >= 1_000_000) return (num / 1_000_000) + 'M';
    if (num >= 1_000) return (num / 1_000) + 'K';
    return num.toLocaleString();
};
