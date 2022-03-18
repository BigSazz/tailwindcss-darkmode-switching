import Layout from '../app/sections/Layout';
import { useSession, signIn } from 'next-auth/react';
import Link from 'next/link';
import { PencilIcon } from '@heroicons/react/solid';

export default function Home() {
	const { data: session, status } = useSession();

	return (
		<div>
			<Layout pageMeta={{ title: 'Home Page' }}>
				{/* Hero section */}
				<section className='flex flex-col justify-center items-center space-y-10 mt-12 sm:mt-24 md:mt-32'>
					{/* Headlines */}
					<div className='space-y-4 max-w-4xl mx-auto text-center'>
						<h1 className='text-4xl sm:text-7xl font-bold capitalize'>
							<span className='block'>The blogging platform</span>
							<span className='block'>for DEVELOPERS</span>
						</h1>
						<h2 className='text-xl sm:text-2xl'>
							Start your developer blog, share ideas, and connect
							with the dev community!
						</h2>
					</div>

					{/* CTA */}
					{status === 'loading' ? null : (
						<>
							{!session ? (
								<button
									type='button'
									onClick={signIn}
									className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap'
								>
									Start your blog for free
								</button>
							) : (
								<Link href='/'>
									<a className='bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md border-2 border-blue-600 hover:border-blue-700 text-lg sm:text-xl focus:outline-none focus:ring-4 focus:ring-blue-600 focus:ring-opacity-50 whitespace-nowrap flex justify-center items-center space-x-2'>
										<PencilIcon className='w-6 h-6 flex-shrink-0' />
										<span>Write a blog post</span>
									</a>
								</Link>
							)}
						</>
					)}
				</section>
			</Layout>
		</div>
	);
}
