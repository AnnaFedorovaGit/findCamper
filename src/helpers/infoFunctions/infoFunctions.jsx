export const reviewsInfo = (rating, reviews) => { 
    return `${rating} (${reviews && reviews.length} Reviews)`;
}

export const locationReverse = (location) => {
  if (location) {
    return location.split(",").reverse().join(", ").trim();
  }
};

export const outputKey = (key) => { 
        if (key === 'airConditioner') {
    return 'AC';
    } else {
        return key.charAt(0).toUpperCase() + key.slice(1);
    }
}

export const iconName = (name) => { 
    return name.toLowerCase();
}
