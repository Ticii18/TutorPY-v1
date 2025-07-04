function Tasks() {
    return (
        <>
            <div className="h-screen dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25 pt-4">
                <article className="max-w-sm rounded-lg border border-gray-100 bg-white p-4 shadow-xs transition hover:shadow-lg sm:p-6 dark:border-gray-800 dark:bg-gray-900 dark:shadow-gray-700/25">
                    <span className="inline-block rounded-sm bg-blue-600 p-2 text-white dark:bg-blue-700">
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            className="h-6 w-6"
                            fill="none"
                            viewBox="0 0 24 24"
                            stroke="currentColor"
                        >
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path
                                d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z"
                            />
                            <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                strokeWidth="2"
                                d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222"
                            />
                        </svg>
                    </span>

                    <a href="#">
                        <h3 className="mt-0.5 text-lg font-medium text-gray-900 dark:text-white">
                            Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                        </h3>
                    </a>

                    <p className="mt-2 text-sm text-gray-500 dark:text-gray-400">
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Recusandae dolores, possimus pariatur
                        animi temporibus nesciunt praesentium dolore sed nulla ipsum eveniet corporis quidem, mollitia
                        itaque minus soluta, voluptates neque explicabo tempora nisi culpa eius atque dignissimos.
                        Molestias explicabo corporis voluptatem?
                    </p>

                    <a href="#" className="group mt-4 inline-flex items-center gap-1 text-sm font-medium text-blue-600">
                        Find out more

                        <span aria-hidden="true" className="block transition-all group-hover:ms-0.5 rtl:rotate-180">
                            &rarr;
                        </span>
                    </a>
                </article>
            </div>
        </>
    )
}

export default Tasks