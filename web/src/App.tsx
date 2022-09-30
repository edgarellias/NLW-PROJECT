import styled from "styled-components";
import logo from "./assets/logo.svg";
import game_1 from "./assets/game_1.png";
import game_2 from "./assets/game_2.png";
import game_3 from "./assets/game_3.png";
import game_4 from "./assets/game_4.png";
import game_5 from "./assets/game_5.png";
import game_6 from "./assets/game_6.png";
import { MagnifyingGlassPlus } from 'phosphor-react';

function App() {
	return (
		<Content>
			<img src={logo} alt="" />
			<h1>
				Seu <span>duo</span> está aqui
			</h1>
			<Games>
				<a href="">
					<img src={game_1} alt="" />
					<div>
						<strong>League of Legends</strong>
						<span>4 anúncios</span>
					</div>
				</a>
				<a href="">
					<img src={game_2} alt="" />
					<div>
						<strong>Apex Legends</strong>
						<span>4 anúncios</span>
					</div>
				</a>
				<a href="">
					<img src={game_3} alt="" />
					<div>
						<strong>Counter Strike</strong>
						<span>4 anúncios</span>
					</div>
				</a>
				<a href="">
					<img src={game_4} alt="" />
					<div>
						<strong>World Of Warcraft</strong>
						<span>4 anúncios</span>
					</div>
				</a>
				<a href="">
					<img src={game_5} alt="" />
					<div>
						<strong>Dota 2</strong>
						<span>4 anúncios</span>
					</div>
				</a>
				<a href="">
					<img src={game_6} alt="" />
					<div>
						<strong>Fortnite</strong>
						<span>4 anúncios</span>
					</div>
				</a>
			</Games>
			<DuoBox>
				<div>
					<div>
						<strong>Não encontrou seu duo?</strong>
						<span>Publique um anúncio para encontrar novos players!</span>
					</div>
					<button><MagnifyingGlassPlus size={24} />Publicar anúncio</button>
				</div>
			</DuoBox>
		</Content>
	);
}

export default App;

const Content = styled.div`
	margin: 80px auto 0px;
	display: flex;
	flex-direction: column;
	align-items: center;
	max-width: 1344px;
	h1 {
		margin-top: 80px;
		font-size: 3.75rem;
		color: white;
		font-weight: 900;
		span {
			background: linear-gradient(90deg, #9572fc 0%, #43e7ad 50.52%, #e2d45c 100%);
			background-clip: text;
			-webkit-background-clip: text;
			color: rgba(0, 0, 0, 0);
		}
	}
`;

const Games = styled.div`
	margin-top: 64px;
	display: grid;
	grid-template-columns: repeat(6, minmax(0, 1fr));
	gap: 1.5rem;
	> a {
		position: relative;
		text-decoration: none;
		color: white;
		border-radius: 0px 0px 8px 8px;
		overflow: hidden;
		> div {
			display: flex;
			flex-direction: column;
			position: absolute;
			bottom: 0;
			left: 0;
			right: 0;
			padding: 4rem 1rem 1rem 1rem;
			background: linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%);
			span {
				color: #d4d4d8;
				font-size: 14px;
			}
		}
	}
`;


const DuoBox = styled.div`
	padding-top: 4px;
	background-image: linear-gradient(89.86deg, #9572FC 23.08%, #43E7AD 33.94%, #E1D55D 44.57%);
	border-radius: 8px;
	overflow: hidden;
	margin-top: 32px; 
	width: 1200px;
	> div {
		background-color: #2A2634;
		padding: 24px 32px;
		display: flex;
		justify-content: space-between;
		align-items: center;
		> div {
			> strong {
				font-size: 24px;
				line-height: 32px;
				color: white;
				font-weight: 900;
				display: block;
			}
			> span {
			color: rgb(161, 161, 170);
			display: block;
			}
		}
		> button {
			padding: 12px 16px;
			background-color:rgb(139, 92, 246);
			color: white;
			border-radius: 6px;
			display: flex;
			align-items: center;
			gap: 12px;
			:hover{
				background-color: rgb(124, 58, 237);
			}
		}
	}
`
