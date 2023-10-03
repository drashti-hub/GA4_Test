// Get all the section links
const sectionLinks = document.querySelectorAll('nav ul li a');
var sectionName;
document.querySelectorAll('nav ul li ').forEach(function(liElement) {
         sectionName = liElement.textContent;
})
// Function to create event schema
function createEventSchema(sectionId) {
    const eventSchema = {
        'event': 'click',
        '@type': 'Event',
        'section_name': `Viewed ${sectionId}`,
        'cta_text':sectionName,
        'location': window.location.href,
        'parameters': {
           '@type': 'ViewAction',
            'target': sectionId
        }
    };
    return JSON.stringify(eventSchema); // Convert object to JSON string
}

// Add click event listener to each section link
sectionLinks.forEach(link => {
    link.addEventListener('click', function(event) {
        const sectionId = link.getAttribute('href'); // Get the section ID from href attribute
        const eventSchema = createEventSchema(sectionId);

        // Send event schema to Google Apps Script to log in Google Sheet
        console.log(eventSchema);
    });
});
