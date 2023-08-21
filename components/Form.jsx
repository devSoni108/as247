const Form = () => {

    return (
      <div className="px-4 sm:px-56 pt-2 pb-10">
        <div className="rounded-lg isolate p-8 border-gray-300 border shadow-md text-blue-950">
          <form name='contact' netlify method="post" data-netlify='true' className="mx-auto max-w-xl">
            <input type="hidden" name="form-name" value="contact" />
            <div className="sm:col-span-2">
              <div>
                <label htmlFor="name" className="block text-sm font-semibold leading-6">
                  Name
                </label>
                <div className="mt-2.5">
                  <input
                    type="text"
                    name="name"
                    id="name"
                    autoComplete="full-name"
                    className="block w-full rounded-md border-0 px-3.5 py-2 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="email" className="block text-sm font-semibold leading-6 pt-2">
                  Email
                </label>
                <div className="mt-2.5">
                  <input
                    type="email"
                    name="email"
                    id="email"
                    autoComplete="email"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="phone-number" className="block text-sm font-semibold leading-6 pt-2">
                  Phone number
                </label>
                <div className="mt-2.5">
                  <input
                    type="tel"
                    name="phone-number"
                    id="phone-number"
                    autoComplete="tel"
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-300 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
              <div className="sm:col-span-2">
                <label htmlFor="message" className="block text-sm font-semibold leading-6 pt-2">
                  Message
                </label>
                <div className="mt-2.5">
                  <textarea
                    name="message"
                    id="message"
                    rows={4}
                    className="block w-full rounded-md border-0 px-3.5 py-2 text-gray-900 shadow-sm ring-1 ring-inset ring-gray-300 placeholder:text-gray-400 focus:ring-2 focus:ring-inset sm:text-sm sm:leading-6"
                  />
                </div>
              </div>
            </div>
            <div className="mt-10">
              <button
                type="submit"
                name="submit"
                className="block w-full rounded-md px-3.5 py-2.5 text-center text-sm font-semibold text-white shadow-sm hover:scale-105" style={{background: '#4ba1d4' }}
              >
                Let&apos;s talk
              </button>
            </div>
          </form>
        </div>
      </div>
    );
  };
  
  export default Form;