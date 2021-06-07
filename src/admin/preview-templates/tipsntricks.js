import htm from "https://unpkg.com/htm?module";
import format from "https://unpkg.com/date-fns@2.7.0/esm/format/index.js?module";

const html = htm.bind(h);

// Preview component for a Post
const Post = createClass({
	render() {
		const entry = this.props.entry;

		return html`
			<nav>
				<ul class="nav_list">
					<li class="nav_list__li nav_list__li--logo">
						<a href="/">
							<svg
								viewBox="0 0 294 73"
								fill="none"
								height="auto"
								width="auto"
								xmlns="http://www.w3.org/2000/svg"
							>
								<g clip-path="url(#clip0)">
									<path
										d="M7.37335 35.9332V30.9334L28.5604 18.7326V24.0602L11.7533 33.4625L28.5604 42.9586V48.2862L7.37335 35.9332ZM31.0307 55.7566L40.306 10.6416H43.4492L34.1998 55.7566H31.0307ZM67.0849 35.9332L45.8979 48.2862V42.9586L62.6792 33.4625L45.8979 24.0602V18.7326L67.0849 30.9334V35.9332Z"
										fill="url(#paint0_linear)"
									/>
									<path
										d="M103.894 24.2253H107.246L98.484 44.7111H95.4479L91.4664 35.0639L87.5268 44.7111H84.4907L75.7291 24.2253H79.0489L86.1401 41.2933L89.4598 32.9004L85.9825 24.2671H89.0186L91.4664 30.7787L93.9141 24.2671H96.9502L93.5149 32.9004L96.8347 41.2933L103.894 24.2253ZM121.796 35.4507C122.924 35.6318 123.894 36.0429 124.706 36.684C125.526 37.325 126.159 38.1368 126.608 39.1193C127.056 40.1018 127.28 41.2062 127.28 42.4325C127.28 44.0282 126.891 45.4322 126.114 46.6447C125.336 47.864 124.237 48.8082 122.815 49.4771C121.4 50.146 119.748 50.4805 117.857 50.4805C115.853 50.4805 114.096 50.1077 112.583 49.3621C111.077 48.6166 109.9 47.5644 109.053 46.2057L111.385 43.8854C111.987 44.9305 112.807 45.7667 113.843 46.3938C114.887 47.0279 116.225 47.3449 117.857 47.3449C119.67 47.3449 121.096 46.9303 122.132 46.1012C123.169 45.2789 123.687 44.0561 123.687 42.4325C123.687 40.7881 123.127 39.4746 122.006 38.4922C120.893 37.5097 119.271 37.0185 117.142 37.0185H116.113V34.1128H117.216C119.114 34.1128 120.567 33.6564 121.575 32.7436C122.591 31.8308 123.099 30.6916 123.099 29.3259C123.099 28.3852 122.875 27.6152 122.426 27.016C121.978 26.4167 121.372 25.9673 120.609 25.6677C119.846 25.3611 118.967 25.2078 117.972 25.2078C116.522 25.2078 115.251 25.5179 114.159 26.138C113.073 26.7512 112.226 27.6048 111.616 28.6987L109.494 26.5038C109.963 25.6189 110.639 24.849 111.522 24.194C112.404 23.539 113.43 23.0303 114.6 22.668C115.769 22.2987 117.013 22.114 118.329 22.114C119.982 22.114 121.446 22.4032 122.721 22.9816C123.995 23.5529 124.986 24.3612 125.694 25.4064C126.408 26.4516 126.765 27.6814 126.765 29.0959C126.765 30.1132 126.566 31.0748 126.166 31.9806C125.774 32.8795 125.203 33.639 124.454 34.2592C123.705 34.8723 122.819 35.2695 121.796 35.4507Z"
										fill="white"
									/>
									<path
										d="M135.965 45.1886V23.7046H144.943C145.872 23.7046 146.718 23.8954 147.479 24.277C148.241 24.6585 148.9 25.1691 149.456 25.8086C150.013 26.4428 150.448 27.1549 150.761 27.945C151.08 28.7296 151.239 29.5358 151.239 30.3634C151.239 31.4329 151.026 32.4325 150.599 33.3623C150.172 34.2867 149.578 35.0633 148.816 35.6921C148.055 36.3155 147.169 36.6971 146.159 36.8368L151.539 45.1886H149.748L144.514 37.0787H137.521V45.1886H135.965ZM137.521 35.6518H145.089C146.024 35.6518 146.834 35.4019 147.52 34.902C148.211 34.3969 148.743 33.7412 149.116 32.935C149.494 32.1235 149.683 31.2663 149.683 30.3634C149.683 29.4336 149.465 28.5711 149.027 27.7757C148.595 26.9749 148.017 26.3273 147.293 25.8328C146.574 25.3384 145.77 25.0912 144.878 25.0912H137.521V35.6518ZM161.483 45.4949C160.37 45.4949 159.336 45.2772 158.38 44.8419C157.429 44.4066 156.603 43.8127 155.9 43.0603C155.204 42.3025 154.658 41.4238 154.264 40.4242C153.869 39.4246 153.672 38.3685 153.672 37.256C153.672 35.7673 154.004 34.4184 154.669 33.2091C155.339 31.9945 156.262 31.0191 157.44 30.2828C158.618 29.5465 159.936 29.1784 161.394 29.1784C162.896 29.1784 164.225 29.5519 165.381 30.2989C166.537 31.046 167.452 32.0295 168.128 33.2494C168.808 34.4694 169.149 35.8049 169.149 37.256C169.149 37.3796 169.149 37.5032 169.149 37.6268C169.149 37.7451 169.14 37.8445 169.124 37.9251H155.252C155.333 39.1182 155.668 40.1985 156.257 41.1658C156.846 42.1332 157.599 42.8937 158.518 43.4473C159.441 44.0008 160.451 44.2776 161.548 44.2776C162.645 44.2776 163.679 43.9954 164.651 43.4311C165.624 42.8668 166.302 42.1413 166.685 41.2545L168.03 41.6173C167.722 42.3643 167.239 43.0307 166.58 43.6166C165.921 44.2024 165.151 44.6619 164.271 44.9951C163.39 45.3283 162.461 45.4949 161.483 45.4949ZM155.187 36.7481H167.69C167.609 35.5174 167.285 34.4291 166.718 33.4832C166.151 32.532 165.405 31.7849 164.481 31.2421C163.558 30.6939 162.539 30.4198 161.427 30.4198C160.308 30.4198 159.293 30.6939 158.38 31.2421C157.472 31.7849 156.732 32.532 156.16 33.4832C155.592 34.4291 155.268 35.5174 155.187 36.7481ZM177.483 45.4949C176.23 45.4949 175.066 45.2826 173.991 44.858C172.916 44.4335 171.973 43.7858 171.163 42.9152L171.86 41.8591C172.729 42.6868 173.61 43.2887 174.501 43.6649C175.398 44.0358 176.373 44.2212 177.426 44.2212C178.782 44.2212 179.881 43.939 180.724 43.3747C181.567 42.8104 181.988 42.0231 181.988 41.0127C181.988 40.3248 181.791 39.7954 181.397 39.4246C181.002 39.0484 180.435 38.7447 179.695 38.5136C178.955 38.2825 178.056 38.0353 176.997 37.7719C175.922 37.4925 175.014 37.2023 174.274 36.9013C173.534 36.595 172.981 36.2 172.613 35.7163C172.251 35.2326 172.07 34.5769 172.07 33.7492C172.07 32.7227 172.33 31.8709 172.848 31.1937C173.367 30.5166 174.066 30.0114 174.947 29.6782C175.827 29.345 176.805 29.1784 177.88 29.1784C179.117 29.1784 180.197 29.3799 181.121 29.783C182.045 30.1861 182.75 30.7208 183.236 31.3872L182.418 32.3546C181.91 31.7097 181.248 31.2314 180.432 30.9197C179.622 30.6079 178.731 30.4521 177.759 30.4521C177.029 30.4521 176.341 30.5542 175.692 30.7584C175.044 30.9573 174.52 31.2851 174.12 31.7419C173.726 32.1934 173.529 32.8007 173.529 33.5638C173.529 34.1711 173.675 34.6468 173.966 34.9907C174.263 35.3347 174.706 35.6141 175.295 35.8291C175.884 36.0387 176.613 36.2644 177.483 36.5063C178.72 36.8073 179.784 37.119 180.676 37.4414C181.572 37.7639 182.264 38.1831 182.75 38.699C183.236 39.2096 183.479 39.9297 183.479 40.8595C183.479 42.2945 182.931 43.4258 181.834 44.2534C180.743 45.0811 179.293 45.4949 177.483 45.4949ZM193.698 45.4949C192.585 45.4949 191.556 45.2826 190.611 44.858C189.671 44.4335 188.855 43.8423 188.164 43.0845C187.472 42.3267 186.935 41.4534 186.551 40.4645C186.168 39.4756 185.976 38.4384 185.976 37.3527C185.976 36.2403 186.168 35.1949 186.551 34.2168C186.935 33.2387 187.475 32.3734 188.172 31.621C188.874 30.8632 189.695 30.2667 190.635 29.8313C191.581 29.396 192.602 29.1784 193.698 29.1784C194.795 29.1784 195.808 29.396 196.737 29.8313C197.671 30.2667 198.492 30.8632 199.2 31.621C199.913 32.3734 200.461 33.2387 200.845 34.2168C201.234 35.1949 201.428 36.2403 201.428 37.3527C201.428 38.4384 201.234 39.4756 200.845 40.4645C200.461 41.4534 199.918 42.3267 199.216 43.0845C198.519 43.8423 197.698 44.4335 196.753 44.858C195.813 45.2826 194.795 45.4949 193.698 45.4949ZM187.491 37.4092C187.491 38.6399 187.77 39.7658 188.326 40.787C188.888 41.8027 189.633 42.6142 190.562 43.2215C191.497 43.8288 192.531 44.1325 193.666 44.1325C194.806 44.1325 195.845 43.8262 196.785 43.2135C197.731 42.5954 198.482 41.7678 199.038 40.7305C199.594 39.6879 199.873 38.5512 199.873 37.3205C199.873 36.0898 199.594 34.9612 199.038 33.9347C198.482 32.9028 197.731 32.0805 196.785 31.4678C195.845 30.8498 194.816 30.5408 193.698 30.5408C192.564 30.5408 191.529 30.8552 190.595 31.484C189.666 32.1074 188.915 32.935 188.342 33.9669C187.775 34.9934 187.491 36.1408 187.491 37.4092ZM204.924 38.5297V29.4525H206.447V38.3201C206.447 40.2764 206.776 41.7355 207.436 42.6975C208.095 43.6542 209.094 44.1325 210.434 44.1325C211.325 44.1325 212.181 43.9363 213.002 43.544C213.823 43.1463 214.547 42.59 215.174 41.8753C215.806 41.1605 216.273 40.3274 216.576 39.3762V29.4525H218.099V43.1893C218.099 43.4311 218.153 43.6139 218.261 43.7375C218.374 43.8557 218.531 43.9256 218.731 43.9471V45.1886C218.531 45.21 218.374 45.2208 218.261 45.2208C218.153 45.2208 218.058 45.21 217.977 45.1886C217.632 45.1456 217.345 45.0005 217.118 44.7532C216.897 44.5006 216.775 44.1916 216.754 43.8262L216.729 41.4641C216.038 42.7163 215.087 43.7025 213.877 44.4227C212.673 45.1375 211.371 45.4949 209.972 45.4949C208.308 45.4949 207.049 44.9091 206.196 43.7375C205.348 42.5659 204.924 40.83 204.924 38.5297H204.924ZM230.412 30.8149C228.997 30.8525 227.754 31.2717 226.685 32.0725C225.62 32.8679 224.878 33.9615 224.456 35.3535V45.1886H222.933V29.4525H224.392V33.322C224.937 32.2149 225.666 31.3147 226.579 30.6214C227.492 29.9227 228.456 29.5223 229.472 29.4202C229.672 29.3987 229.853 29.388 230.015 29.388C230.182 29.388 230.315 29.388 230.412 29.388V30.8149ZM239.414 45.4949C238.323 45.4949 237.3 45.2772 236.343 44.8419C235.393 44.4066 234.561 43.8127 233.848 43.0603C233.14 42.3025 232.589 41.4292 232.195 40.4403C231.8 39.4514 231.603 38.39 231.603 37.256C231.603 35.7458 231.935 34.3861 232.6 33.1769C233.27 31.9623 234.193 30.9922 235.371 30.2667C236.549 29.5411 237.888 29.1784 239.39 29.1784C240.827 29.1784 242.094 29.5062 243.19 30.1619C244.287 30.8175 245.108 31.7097 245.654 32.8383L244.163 33.322C243.698 32.4567 243.034 31.7769 242.169 31.2824C241.31 30.788 240.362 30.5408 239.325 30.5408C238.169 30.5408 237.124 30.8337 236.189 31.4195C235.26 32.0053 234.515 32.8087 233.953 33.8299C233.397 34.8456 233.118 35.9877 233.118 37.256C233.118 38.5082 233.402 39.661 233.969 40.7144C234.542 41.7624 235.298 42.5954 236.238 43.2135C237.183 43.8262 238.223 44.1325 239.358 44.1325C240.087 44.1325 240.8 43.9954 241.497 43.7213C242.199 43.4473 242.81 43.0899 243.328 42.6492C243.847 42.2031 244.187 41.7275 244.349 41.2223L245.84 41.6495C245.575 42.3966 245.116 43.0576 244.462 43.6327C243.814 44.2077 243.058 44.6619 242.194 44.9951C241.335 45.3283 240.408 45.4949 239.414 45.4949ZM255.84 45.4949C254.727 45.4949 253.693 45.2772 252.737 44.8419C251.786 44.4066 250.96 43.8127 250.257 43.0603C249.56 42.3025 249.015 41.4238 248.621 40.4242C248.226 39.4246 248.029 38.3685 248.029 37.256C248.029 35.7673 248.361 34.4184 249.026 33.2091C249.695 31.9945 250.619 31.0191 251.797 30.2828C252.974 29.5465 254.293 29.1784 255.751 29.1784C257.253 29.1784 258.582 29.5519 259.738 30.2989C260.894 31.046 261.809 32.0295 262.485 33.2494C263.165 34.4694 263.505 35.8049 263.505 37.256C263.505 37.3796 263.505 37.5032 263.505 37.6268C263.505 37.7451 263.497 37.8445 263.481 37.9251H249.609C249.69 39.1182 250.025 40.1985 250.614 41.1658C251.203 42.1332 251.956 42.8937 252.874 43.4473C253.798 44.0008 254.808 44.2776 255.905 44.2776C257.002 44.2776 258.036 43.9954 259.008 43.4311C259.981 42.8668 260.659 42.1413 261.042 41.2545L262.387 41.6173C262.079 42.3643 261.596 43.0307 260.937 43.6166C260.278 44.2024 259.508 44.6619 258.628 44.9951C257.747 45.3283 256.818 45.4949 255.84 45.4949H255.84ZM249.544 36.7481H262.047C261.966 35.5174 261.642 34.4291 261.075 33.4832C260.507 32.532 259.762 31.7849 258.838 31.2421C257.914 30.6939 256.896 30.4198 255.783 30.4198C254.665 30.4198 253.65 30.6939 252.737 31.2421C251.829 31.7849 251.089 32.532 250.517 33.4832C249.949 34.4291 249.625 35.5174 249.544 36.7481ZM271.84 45.4949C270.587 45.4949 269.423 45.2826 268.348 44.858C267.273 44.4335 266.33 43.7858 265.52 42.9152L266.217 41.8591C267.086 42.6868 267.967 43.2887 268.858 43.6649C269.755 44.0358 270.73 44.2212 271.783 44.2212C273.139 44.2212 274.238 43.939 275.081 43.3747C275.924 42.8104 276.345 42.0231 276.345 41.0127C276.345 40.3248 276.148 39.7954 275.754 39.4246C275.359 39.0484 274.792 38.7447 274.052 38.5136C273.312 38.2825 272.413 38.0353 271.354 37.7719C270.279 37.4925 269.371 37.2023 268.631 36.9013C267.891 36.595 267.337 36.2 266.97 35.7163C266.608 35.2326 266.427 34.5769 266.427 33.7492C266.427 32.7227 266.687 31.8709 267.205 31.1937C267.724 30.5166 268.423 30.0114 269.304 29.6782C270.184 29.345 271.162 29.1784 272.237 29.1784C273.474 29.1784 274.554 29.3799 275.478 29.783C276.402 30.1861 277.107 30.7208 277.593 31.3872L276.775 32.3546C276.267 31.7097 275.605 31.2314 274.789 30.9197C273.979 30.6079 273.088 30.4521 272.115 30.4521C271.386 30.4521 270.697 30.5542 270.049 30.7584C269.401 30.9573 268.877 31.2851 268.477 31.7419C268.083 32.1934 267.886 32.8007 267.886 33.5638C267.886 34.1711 268.032 34.6468 268.323 34.9907C268.62 35.3347 269.063 35.6141 269.652 35.8291C270.241 36.0387 270.97 36.2644 271.84 36.5063C273.077 36.8073 274.141 37.119 275.032 37.4414C275.929 37.7639 276.621 38.1831 277.107 38.699C277.593 39.2096 277.836 39.9297 277.836 40.8595C277.836 42.2945 277.288 43.4258 276.191 44.2534C275.1 45.0811 273.65 45.4949 271.84 45.4949Z"
										fill="white"
									/>
								</g>
								<defs>
									<linearGradient
										id="paint0_linear"
										x1="7.5972"
										y1="13.3458"
										x2="68.3447"
										y2="28.9704"
										gradientUnits="userSpaceOnUse"
									>
										<stop stop-color="#A2FAA3" />
										<stop offset="1" stop-color="#3AAFB9" />
									</linearGradient>
									<clipPath id="clip0">
										<rect
											width="294"
											height="78"
											fill="white"
											transform="translate(0 -5)"
										/>
									</clipPath>
								</defs>
							</svg>
						</a>
					</li>
					<li class="nav_list__li nav_list__li--first">
						<a
							href="/resources"
							class="nav_list__link nav_list__link--resources"
							>Resources</a
						>
						<a
							href="/tipsNtricks"
							class="nav_list__link nav_list__link--tipsntricks nav_list__link--tipsntricks--active"
							>tipsNtricks</a
						>
						<a
							href="/contact"
							class="nav_list__link nav_list__link--contact"
							>Contact</a
						>
						<a
							href="javascript:void(0)"
							class="nav_list__link nav_list__link--search"
							><i class="fas fa-search"></i
						></a>
					</li>
				</ul>
				<input
					type="checkbox"
					class="mobile_nav__toggle"
					id="mobile_nav__toggle"
				/>
				<label for="mobile_nav__toggle" class="mobile_nav__label"
					><span></span
				></label>

				<div class="mobile_nav">
					<a
						href="/resources"
						class="mobile_nav__link mobile_nav__link--resources "
						>Resources</a
					>
					<a
						href="/tipsNtricks"
						class="mobile_nav__link mobile_nav__link--tipsntricks mobile_nav__link--tipsntricks--active"
						>tipsNtricks</a
					>
					<a
						href="/contact"
						class="mobile_nav__link mobile_nav__link--contact"
						>Contact</a
					>
					<a
						href="javascript:void(0)"
						class="mobile_nav__link mobile_nav__link--search"
						><i class="fas fa-search"></i
					></a>
				</div>
			</nav>
			<div class="content_wrapper">
				<header>
					<h1 class="header__title">
						${entry.getIn(["data", "title"], null)}
					</h1>
					<div class="post_details">
						<p class="header__author">
							<i class="fas fa-user-circle"></i> ${entry.getIn(
								["data", "author"],
								null
							)}
						</p>
						<p class="header__date">
							<i class="fas fa-calendar-day"></i> Date
						</p>
					</div>
				</header>

				<main>${this.props.widgetFor("body")}</main>
			</div>

			<footer>
				<ul class="footer_list">
					<li class="footer_list__li footer_list__li--home">
						<a
							href="/"
							class="footer_list__link footer_list__link--home"
							>Home</a
						>
					</li>
					<li class="footer_list__li">
						<a
							href="/resources"
							class="footer_list__link footer_list__link--resources"
							>Resources</a
						>
					</li>
					<li class="footer_list__li">
						<a
							href="/tipsNtricks"
							class="footer_list__link footer_list__link--tipsntricks"
							>tipsNtricks</a
						>
					</li>
					<li class="footer_list__li footer_list__li--contact">
						<a
							href="/contact"
							class="footer_list__link footer_list__link--contact"
							>Contact</a
						>
					</li>
				</ul>

				<p class="github">
					<a href="https://github.com/bobsfriend12/w3Resources"
						>Source code available on GitHub.</a
					>
				</p>

				<div class="legal">
					<p class="license">Licensed under the MIT license</p>
					<p class="copyright">
						&copy; 2021 bobsfriend12
						<span class="rights">All Rights Reserved</span>
					</p>
					<a class="legal__link" href="/legal">The legal things</a>
				</div>
			</footer>
		`;
	}
});

export default Post;