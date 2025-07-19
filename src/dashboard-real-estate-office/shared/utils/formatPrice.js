export const formatPrice = (price) => {
    if (!price) return '0';

    const num = Number(price);
    if (isNaN(num)) return price;

    if (num >= 1_000_000) return (num / 1_000_000).toFixed(3) + 'M';
    if (num >= 1_000) return (num / 1_000).toFixed(3) + 'K';
    return num.toLocaleString();
};
