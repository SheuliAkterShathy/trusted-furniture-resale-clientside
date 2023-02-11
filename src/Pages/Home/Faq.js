import React from "react";

const Faq = () => {
  return (
    <section className="py-8 dark:bg-gray-800 dark:text-gray-100">
	<div className="container mx-auto">
		<div className="p-4 mx-auto text-center md:px-10 lg:px-32 xl:max-w-3xl">
			<h2 className="text-2xl font-bold leading-none sm:text-4xl">4 Simple Steps to Sell & Buy Products</h2>
			<p className="px-8 my-4">If anybody wants to seel and buy his furniture products must follow some steps.SignUp,Login,Admin,Seller,Buyer.</p>
		</div>
		<div className="grid grid-cols-5 p-4 md:p-8">
			<div className="flex justify-center px-4 col-span-full md:col-span-1 md:flex-col md:justify-start md:items-start">
				<button className="p-2 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ">SignUp</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ">Login</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ">Admin</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ">Seller</button>
				<button className="px-2 py-1 border-b-2 md:border-l-2 md:border-b-0 md:py-3 ">Buyer</button>
			</div>
			<div className="grid gap-12 py-4 text-center sm:grid-cols-2 col-span-full md:col-span-4 md:text-left">
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					{/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path>
					</svg> */}
					<img className="w-12" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/log-in-3505259-2934724.png?f=avif&w=256" alt="" />
					<h5 className="text-xl font-semibold">Signup/login</h5>
					<p>Please  create an account first and  choose seller or buyer account. Google signup means buyers account. After click the dashboard sellers can see  add product and my products. Buyers can see the my orders and my wishlist. If Sellers add a product then he/she can see the products in My products route.  Sellers easily can advertise and delete their product. Only buyers can see the booked products in my orders route and can pay easily.</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					{/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"></path>
					</svg> */}
					<img className="w-12" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/sell-1964013-1663001.png?f=avif&w=256" alt="" />
					<h5 className="text-xl font-semibold">Seller</h5>
					<p>Only sellers will sell the furniture product. After clicking the dashboard, sellers can see two route add product and my products. Click the add product route see a form and fill up the form of a products details.After submitting  button it will take to the my products route and see your products status(sold/unsold) and you can easily delete your product. Most benefits you can advertise your product.</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					{/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 7v10c0 2.21 3.582 4 8 4s8-1.79 8-4V7M4 7c0 2.21 3.582 4 8 4s8-1.79 8-4M4 7c0-2.21 3.582-4 8-4s8 1.79 8 4m0 5c0 2.21-3.582 4-8 4s-8-1.79-8-4"></path>
					</svg> */}
					<img className="w-12" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/buy-172-326114.png?f=avif&w=256" alt="" />
					<h5 className="text-xl font-semibold">Buyers</h5>
					<p>Only buyers can book products. After clicking the book now button, a modal will be opened then fill up these all fields and submit the form. Their all booked products can see easily my orders route of dashboard.If buyer want to wish to bye products then he will see my wishlist Buyer can pay for  his products with stripe.</p>
				</div>
				<div className="flex flex-col items-center justify-center space-y-3 md:justify-start md:items-start">
					{/* <svg fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" className="w-6 h-6 dark:text-violet-400">
						<path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"></path>
					</svg> */}
					<img className="w-9" src="https://cdn.iconscout.com/icon/premium/png-256-thumb/admin-authentication-5380906-4537033.png?f=avif&w=256" alt="" />
					<h5 className="text-xl font-semibold">Admin</h5>
					<p>Only admin can  see  all users(sellers and buyers) information. Admin can delete any sellers or buyers account. Users all information are  secure and safety. Without login admin also can not see his dashboard.In admin dashboard, there are two routes,Seller routes and buyers route. Admin has all authority to controll buyers and sellers.</p>
				</div>
			</div>
		</div>
	</div>
</section>
  );
};

export default Faq;
