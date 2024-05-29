
const CurrentDate = () => {
    const today = new Date();
    const formattedDate = today.toLocaleDateString('en-US', {
        month: 'long',
        day: 'numeric'
    });

    return (
        <div className="clock">
            <p>{formattedDate}</p>
        </div>
    );
};

export default CurrentDate;
