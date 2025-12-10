const ContactForm = () => {
	return (
		<form>
			<div className='flex'>
				<label htmlFor='email'>Email</label>
				<input
					id='email'
					type='text'></input>
			</div>
		</form>
	);
};

export default ContactForm;
