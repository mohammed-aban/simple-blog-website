let allBlogs = document.querySelector('.js-blog-grid');


// blogContent is the array containing each blog's information as an object.
const blogContent = [{
    heading: 'India and China just reached a landmark agreement to de-escalate border tensions!',
    authorName: 'BI India Bureau',
    publishDate: '22-10-2024',
    description: 'India and China have reached a historic agreement to ease tensions along their disputed border, marking a significant step towards improving bilateral relations and regional stability.',
    hyperlink: 'https://www.businessinsider.in/international/news/india-and-china-just-reached-a-landmark-agreement-to-de-escalate-border-tensions-heres-what-happens-now/articleshow/114463355.cms'
},
{
    heading: 'Job-hunting in 2024 has a modern dating element — ghosting!',
    authorName: 'Divyanshi Sharma',
    publishDate: '22-10-2024',
    description: 'Job-hunting in 2024 involves ghosting: candidates, employees, and employers abruptly stop communication, causing frustration and uncertainty.',
    hyperlink: 'https://www.businessinsider.in/careers/news/job-hunting-in-2024-has-a-modern-dating-element-ghosting/articleshow/114454697.cms'
},
{
    heading: 'The West is trying to starve the wrong part of Russia\'s war machine, defense experts say',
    authorName: 'Michael Peck',
    publishDate: '20-10-2024',
    description: 'Western sanctions on Russian tank production have had limited impact. Russia has alternative sources for critical components.',
    hyperlink: 'https://www.businessinsider.in/international/news/the-west-is-trying-to-starve-the-wrong-part-of-russias-war-machine-defense-experts-say/articleshow/114398949.cms'

},
{
    heading: 'Sam Altman risks spreading himself too thin at OpenAI',
    authorName: 'Lloyd Lee',
    publishDate: '18-10-2024',
    description: ' Sam Altman\'s multiple roles at OpenAI raise concerns about his ability to effectively manage the company.',
    hyperlink: 'https://www.businessinsider.in/artificial-intelligence/news/sam-altman-risks-spreading-himself-too-thin-at-openai/articleshow/114333335.cms'
},{
    heading: 'A bottom-up approach to AI adoption can drive innovation and inclusion, a Cisco EVP says.',
    authorName: 'Jean Paik',
    publishDate: '18-10-2024',
    description: 'Cisco’s AI initiatives focus on reskilling and upskilling the workforce, leveraging AI for productivity and security, and encouraging bottom-up innovation through employee engagement and training programs.',
    hyperlink: 'https://www.businessinsider.in/artificial-intelligence/news/a-bottom-up-approach-to-ai-adoption-can-drive-innovation-and-inclusion-a-cisco-evp-says/articleshow/114327122.cms'
},
{
    heading: 'I\'ve worked at Google, Amazon, and Uber. These are 3 common mistakes I see when people apply for tech jobs.',
    authorName: 'Ana Altchek',
    publishDate: '21-10-2024',
    description: 'Common mistakes in tech job applications: not answering questions concisely, listing responsibilities without impact, and repeating résumé in intros.',
    hyperlink: 'https://www.businessinsider.in/careers/news/ive-worked-at-google-amazon-and-uber-these-are-3-common-mistakes-i-see-when-people-apply-for-tech-jobs-/articleshow/114430336.cms'
}];

let allBlogsHTML = '';

// Looping through blogContent and adding its information to HTML. 
blogContent.forEach((blog) => {
    allBlogsHTML += `
    <div class="blog-card">
        <p class="blog-title">${blog.heading}</p>
        <div class="author-date">
            <p class="publisher-name">${blog.authorName}</p>
            <p class="publish-date">${blog.publishDate}</p>
        </div>
        <p class="description">
            ${blog.description}
        </p>
        <p class="read-more">
            <a class="hyperlink" target="blank" href="${blog.hyperlink}">Click here</a> to read more.
        </p>
    </div>
    `
})

allBlogs.innerHTML = allBlogsHTML;
console.log(allBlogs.innerHTML);
