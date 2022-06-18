/* By default Cypress uses css to identify elements there's an xpath plugin we can use but css is quicker 
so we should encourage devs to provide unique ways to identify elements
*/
export default {
  headerLogo: "header img[src='https://s3.sliide.com/Icons/_max1920/Logo.svg']",
  headerLinks: "header a",
  contactUsLink: "header a[href='/contact-us']",
};
