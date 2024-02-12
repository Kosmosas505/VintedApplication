import { test, expect } from '@playwright/test';

test('VintedApplication', async ({ page }) => {
   // Open Vinted Academy Application
   await page.goto('https://boards.eu.greenhouse.io/embed/job_app?for=vinteden&t=2aee7c72teu&token=4286416101&b=https%3A%2F%2Fcareers.vinted.com%2Fjobs%2Fj%2F4286416101');



   await page.pause()

   //  Fill up First Name
   await page.getByLabel('First Name *').click();
   await page.getByLabel('First Name *').fill('Artūras');
   // Fill up Last Name
   await page.getByLabel('Last Name *').click();
   await page.getByLabel('Last Name *').fill('Kolij');
   // Fill up Email adress
   await page.getByLabel('Email *').click();
   await page.getByLabel('Email *').fill('arturas.kolij@gmail.com');
   // Fill up Phone number
   await page.getByLabel('Phone *').click();
   await page.getByLabel('Phone *').fill('+37060414779');

   // // Fun part! - Add your CV   
   const CV = '../Playwright/Test_files/CV.pdf';
   await page.waitForSelector('#resume_fieldset > div');
   const input = await page.$('input[type="file"]');
   await input.setInputFiles(CV);


   // Enter LinkedIn profile
   await page.getByLabel('LinkedIn Profile').click();
   await page.getByLabel('LinkedIn Profile').fill('https://www.linkedin.com/in/arturaskolij/');

   // Time for some magic! Enter repo link to this code!
   await page.getByLabel('Your GitHub, portfolio, link to your projects or anything similar that showcases your technical skills/code. Anything that you think we would love to see:').click();
   await page.getByLabel('Your GitHub, portfolio, link to your projects or anything similar that showcases your technical skills/code. Anything that you think we would love to see:').fill("Since all of my previous tests are owned by my old company and I cannot share them, I've made a little simple code that fills and submits this application :))  https://github.com/Kosmosas505/VintedApplication/");

   // Ok let's continue
   // I'm just a code, I cannot read the Privacy Policy, but I'll accept it
   await page.locator('#s2id_job_application_answers_attributes_3_answer_selected_options_attributes_3_question_option_id').getByRole('link', { name: 'Please select' }).click();
   await page.locator('#select2-result-label-7').click();

   // Of course I want Vinted to send me future job opportunities (Hope I won't need them tho)
   await page.getByRole('link', { name: '--' }).click();
   await page.locator('#select2-result-label-9').click();

   // Make them like you more by adding your motivational speech here 
   await page.getByLabel('Why are you interested in joining the Vinted Engineering Academy? *').click();
   await page.getByLabel('Why are you interested in joining the Vinted Engineering Academy? *').fill('Since starting my career as a QA, I have been mostly self-taught. I have always wanted to improve, but I never had a QA mentor from whom I could learn. My goal is to surround myself with like-minded professionals, and I firmly believe that by joining Vinted Academy, I would reach that goal.');

   // Off course I'm eliigible to work in this country, I can work everywhere!
   await page.locator('#s2id_job_application_answers_attributes_6_answer_selected_options_attributes_6_question_option_id').getByRole('link', { name: 'Please select' }).click();
   await page.locator('#select2-result-label-12').click();

   // No CodeAcademy here, sadly
   await page.locator('#s2id_job_application_answers_attributes_7_answer_selected_options_attributes_7_question_option_id').getByRole('link', { name: 'Please select' }).click();
   await page.locator('#select2-result-label-19').click();

   // I study by myself
   await page.getByRole('link', { name: 'Please select' }).click();
   await page.locator('#select2-result-label-31').click();

   // Not that old!
   await page.getByText('31-35').click();

   // BIG MAN
   await page.getByText('Male', { exact: true }).click();

   // Who likes women
   await page.getByText('Straight / heterosexual').click();

   // No disabilities gladly
   await page.getByText('No', { exact: true }).nth(1).click();


   // Not ill, just ADHD
   await page.getByText('No', { exact: true }).nth(2).click();

   // Well this is more like it 
   await page.locator('#demographic_questions').getByText('Yes').nth(2).click();

   // Yep, 10 years already !
   await page.locator('#demographic_questions').getByText('Yes').nth(3).click();

   // Just to make this a test 
   await expect(page.getByRole('button', { name: 'Submit Application' })).toBeVisible();


});