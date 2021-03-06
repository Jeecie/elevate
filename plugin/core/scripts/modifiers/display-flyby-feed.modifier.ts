import { AbstractModifier } from "./abstract.modifier";

export class DisplayFlyByFeedModifier extends AbstractModifier {

	public modify(): void {
		// Add flyby button in dashboard
		setInterval(() => {

			$(".entry-container>h3>a[href*=activities]").each((index: number, element: Element) => {

				if (!$(element).parent().parent().find(".sx-flyby").length) {

					const activityId: number = parseInt($(element).attr("href").split("/")[2]);
					const html = "<a href=\"#\" title=\"FlyBy\" class=\"sx-flyby\">Go to FlyBy</a>";
					$(element).parent().parent().find(".btn-group").after("</br></br>" + html + "</br></br>").each(() => {
						$(element).parent().parent().find(".sx-flyby").click(function () {
							window.open("http://labs.strava.com/flyby/viewer/?utm_source=strava_activity_header#" + activityId);
						});
					});
				}
			});
		}, 750);
	}
}
