const Contact = () => {
	return (
		<section className='min-h-screen bg-cyan-700'>
			<div className='max-w-2xl lg:max-w-7xl px-4 py-16 mx-auto '>
				<h1 className='mb-8 text-3xl sm:text-4xl font-extrabold text-center'>
					Want to have a conversation?
				</h1>
				<div className='flex flex-col items-center p-8 bg-white/10 backdrop-blur-md rounded-xl shadow-xl border border-white/20 max-w-xs mx-auto'>
					<img
						src='contact.png'
						alt='Contact'
						className='w-14 h-14 p-2 rounded-lg bg-white/20'
					/>
					<h5 className='font-bold text-2xl text-white mt-4'>Contact</h5>
					<p className='text-white/70 text-sm mt-1'>Email</p>
					<a
						href='mailto:priyasharma2702@gmail.com?subject=Hello&body=I%20would%20like%20to%20connect%20with%20you!'
						className='mt-2 text-lg font-medium text-white underline decoration-white/40 hover:decoration-white hover:text-white/90 transition'>
						priyasharma2702@gmail.com
					</a>
				</div>
			</div>
		</section>
	);
};

export default Contact;
