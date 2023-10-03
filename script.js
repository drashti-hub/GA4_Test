// Get all the section links
const sectionLinks = document.querySelectorAll('nav ul li a');

// Function to create event schema
function createEventSchema(sectionId) {
    const eventSchema = {
        '@context': 'http://schema.org',
        '@type': 'Event',
        'name': `Viewed ${sectionId}`,
        'location': window.location.href,
        'action': {
            '@type': 'ViewAction',
            'target': sectionId
        }
    };
    return eventSchema;
}

// Add click event listener to each section link
sectionLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const sectionId = link.getAttribute('href'); // Get the section ID from href attribute
        const eventSchema = createEventSchema(sectionId);
        console.log(eventSchema); // Log the event schema (you can send it to your server or analytics service)
    });
});
