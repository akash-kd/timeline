import { useState } from 'react'
import Button from '../../components/Button/button'
import './styles.css'
import { TypeAnimation } from 'react-type-animation'

export function CharmInfinity(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='120px'
			height='120px'
			viewBox='0 0 16 16'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				// stroke-linecap='round'
				// stroke-linejoin='round'
				stroke-width='1.5'
				d='M5 5c2.5 1 3.5 5 6 6s3.25-1.25 3.25-3S13.5 4 11 5s-3.5 5-6 6s-3.25-1.25-3.25-3S2.5 4 5 5z'
			></path>
		</svg>
	)
}
function CharmNorthStar(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='120px'
			height='120px'
			viewBox='0 0 16 16'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				stroke-width='1.5'
				d='M13.75 7.75h-12m6-6v12m-3.5-2.5l7-7m0 7l-7-7'
			></path>
		</svg>
	)
}

export function CharmGithub(props) {
	return (
		<svg
			xmlns='http://www.w3.org/2000/svg'
			width='120px'
			height='120px'
			viewBox='0 0 16 16'
			{...props}
		>
			<path
				fill='none'
				stroke='currentColor'
				stroke-linecap='round'
				stroke-linejoin='round'
				stroke-width='1.5'
				d='M5.75 14.25s-.5-2 .5-3c0 0-2 0-3.5-1.5s-1-4.5 0-5.5c-.5-1.5.5-2.5.5-2.5s1.5 0 2.5 1c1-.5 3.5-.5 4.5 0c1-1 2.5-1 2.5-1s1 1 .5 2.5c1 1 1.5 4 0 5.5s-3.5 1.5-3.5 1.5c1 1 .5 3 .5 3m-5-.5c-1.5.5-3-.5-3.5-1'
			></path>
		</svg>
	)
}

function PageA() {
	return (
		<>
			<p className='content-para para1'>
				Our actions determine our glorious future. Record and see what
				you are actually doing.This application puts forward a simple
				question.
			</p>
			<p className='content-para para2'>
				Are We Really Doing the Actions that pave the path to our dream
				Future ?
			</p>
		</>
	)
}

function PageB() {
	return (
		<div className='features'>
			<div className='featureA'>
				<CharmInfinity />
				<p>No Sign Up</p>
			</div>
			<div className='featureA'>
				<CharmNorthStar />
				<p>Highlights</p>
			</div>
			<div className='featureA'>
				<CharmGithub />
				<p>Open Source</p>
			</div>
		</div>
	)
}

function Nav({ slide, setSlides }) {
	return (
		<div className='content-nav'>
			<svg
				onClick={() => setSlides((prev) => prev - 1)}
				width='136'
				height='56'
				viewBox='0 0 136 56'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='intro-button intro-next'
				disabled=''
			>
				<path
					d='M133 54.5H134.5V53V14.5V13.9182L134.108 13.4886L123.608 1.98859L123.162 1.5H122.5H3H1.5V3V53V54.5H3H133Z'
					stroke-width='3'
				/>
				<text x='20' y='36'>
					{'< Prev'}
				</text>
			</svg>
			<svg
				onClick={() => {
					setSlides((prev) => prev + 1)
					if (slide === 1) {
						localStorage.setItem('intro', true)
						location.reload()
					}
				}}
				width='136'
				height='56'
				viewBox='0 0 136 56'
				fill='none'
				xmlns='http://www.w3.org/2000/svg'
				className='intro-button intro-prev'
			>
				<path
					d='M3 54.5H1.5V53V14.5V13.9182L1.89227 13.4886L12.3923 1.98859L12.8384 1.5H13.5H133H134.5V3V53V54.5H133H3Z'
					stroke-width='3'
				/>
				<text x='30' y='36'>
					{'Next >'}
				</text>
			</svg>
		</div>
	)
}

export default function Intro() {
	const [slide, setSlides] = useState(0)

	return (
		<main className='intro-main'>
			<div className='intro-content'>
				<h1 className='content-title'>Timeline</h1>
				{slide === 0 ? <PageA /> : <PageB />}
				<Nav slide={slide} setSlides={setSlides} />
			</div>
		</main>
	)
}
