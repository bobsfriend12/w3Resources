import resource from "/admin/preview-templates/resource.js";
import tipsntricks from "/admin/preview-templates/tipsntricks.js";

// Register the Post component as the preview for entries in the blog collection
CMS.registerPreviewTemplate("resources", resource);
CMS.registerPreviewTemplate("tipsNtricks", tipsntricks);

CMS.registerPreviewStyle("/css/post.css");
CMS.registerPreviewStyle("font-awesome/all.css");

// // Register any CSS file on the home page as a preview style
fetch("/")
	.then((response) => response.text())
	.then((html) => {
		const f = document.createElement("html");
		f.innerHTML = html;
		Array.from(f.getElementsByTagName("link")).forEach((tag) => {
			if (
				tag.rel == "stylesheet" &&
				!tag.media &&
				tag.href.indexOf("/css/index.css") < 0
			) {
				CMS.registerPreviewStyle(tag.href);
			}
		});
	});
