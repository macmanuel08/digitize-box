import Header from '@/app/ui/header';
import Hero from '@/app/ui/homepage/hero';
import Welcome from '@/app/ui/homepage/welcome';
import Services from '@/app/ui/homepage/services';
import Scheduling from '@/app/ui/homepage/scheduling';
import FormFooter from '@/app/ui/formfooter';

export default function Page() {
	const structuredData = {
		"@context": "https://schema.org",
		"@graph": [
			{
				"@type": "Organization",
				"name": "DigitizeBox",
				"url": "https://digitizebox.com",
				"description": "Custom healthcare software provider in the Philippines building medical websites, EHR systems, patient scheduling systems, and clinic dashboards.",
				"areaServed": {
					"@type": "Country",
					"name": "Philippines"
			},
			"sameAs": [
				"https://www.facebook.com/digitizebox",
			]
			},
			{
				"@type": "WebSite",
				"name": "DigitizeBox",
				"url": "https://digitizebox.com",
				"description": "Custom healthcare software for clinics and doctors in the Philippines including EHR systems, scheduling systems, and clinic dashboards."
			},
			{
				"@type": "SoftwareApplication",
				"name": "Clinic Management and EHR System",
				"applicationCategory": "HealthApplication",
				"operatingSystem": "Web",
				"description": "A custom healthcare platform for clinics and doctors that includes electronic health records (EHR), patient scheduling, clinic dashboards, and workflow automation.",
				"offers": {
					"@type": "Offer",
					"price": "0",
					"priceCurrency": "PHP",
					"availability": "https://schema.org/InStock"
				},
				"provider": {
					"@type": "Organization",
					"name": "DigitizeBox"
				}
			}
		]
	}

	return (
		<>
			<script
				type="application/ld+json"
				dangerouslySetInnerHTML={{
				__html: JSON.stringify(structuredData),
				}}
			/>
			<Header />
			<main>
				<Hero />
				<Welcome />
				<Services />
				<Scheduling />
			</main>
			<FormFooter />
		</>
	);
}