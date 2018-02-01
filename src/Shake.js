import React from 'react';
import styled, { keyframes } from 'styled-components';

const Shake = ({
	h = 5,
	v = 5,
	r = 3,
	dur = 300,
	q = 'infinite',
	tf = 'ease-in-out',
	int = 10,
	max = 100,
	orig = 'center center',
	fixed = false,
	freez = false,
	active = true,
	trigger = ':hover',
	fixedStop = false,
	elem = 'div',
	...props,
}) => {
	const random = (max, min = 0) => {
		return (Math.random() * (max - min) - max / 2);
	};
	
	const doKeyframes = () => {
		// el objecto que iremos llenando
		let kf = {};
		const init = 'translate(0,0) rotate(0)';
		
		// loop con intervalos basados en `int`
		for (let st = int; st <= max; st += int) {
			// Numeros aleatorios en cada keyframe
			const x = random(h);
			const y = random(v);
			const rot = random(r);
			
			kf[`${st}%`] = {
				transform: `translate(${x}px, ${y}px) rotate(${rot}deg)`,
			}
		}
		
		// Init de las transformaciones en 0% y 100%
		kf[`0%`] = kf[`${Math.min(max, 100)}%`] =  {
			transform: init,
		}
		
		return kf;
	};

	// Creamos los `@keyframes`
	const kf = doKeyframes();
	
	const toString = (obj) => {
		return Object.keys(obj).reduce((acc, next) => {
			return `${acc}
			${next} {
				transform: ${obj[next].transform}
			}`
		}, '')
	};
	
	const shakeKeyframes = keyframes`${toString(kf)}`;
	const shouldShakeDefault = fixed || (!fixed && freez);
	const shouldShakeWhenTriggered = !fixed && !freez;
	
	const ShakeComp = styled[elem]`
		animation-name: ${shouldShakeDefault && shakeKeyframes};
		animation-duration: ${dur}ms;
		animation-iteration-count: ${q};
		display: 'inline-block';
		transform-origin: ${orig};
		
		&${trigger} {
			animation-name: ${shouldShakeWhenTriggered && shakeKeyframes};
			animation-play-state: ${freez && (!fixed ? 'running' : 'paused')};
			animation: ${fixed && fixedStop && 'initial'};
		}
		
		animation-play-state: ${freez && (!fixed ? 'paused' : 'running')};
	`;
		
	return (
		<ShakeComp { ...props }>
			{ props.children }
		</ShakeComp>
	);
};

export default Shake;
