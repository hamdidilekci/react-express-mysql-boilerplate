// src/components/HomeInfo.js

import React from 'react'
import { Typography, Card, Col, Row } from 'antd'
import { SmileOutlined, InfoCircleOutlined, PhoneOutlined, IdcardOutlined } from '@ant-design/icons'
import './HomeInfo.css'

const { Title, Paragraph, Text } = Typography

const HomeInfo = () => (
	<div style={{ padding: '20px' }}>
		<Title level={2}>
			<SmileOutlined /> Hoş Geldiniz!
		</Title>
		<Paragraph className="intro-text">
			Bu uygulama, çeşitli verileri kolayca bulmanızı sağlayan kullanışlı bir araçtır. Aşağıda, uygulamanın farklı sekmelerinde yapabilecekleriniz
			hakkında bilgiler bulacaksınız.
		</Paragraph>

		<Row gutter={[16, 16]} className="info-cards">
			<Col span={24}>
				<Card
					className="custom-card"
					title={
						<span>
							<PhoneOutlined /> Aqua GSM
						</span>
					}
					bordered={false}
				>
					<Paragraph>
						<Text strong>Aqua GSM</Text> sekmesinde vatandaşların telefon numaralarını <Text strong>TC kimlik numarası</Text> ile veya telefon
						numarası ile bulabilirsiniz.
					</Paragraph>
					<Paragraph>
						<Text strong>Özellikler:</Text>
						<ul>
							<li>
								Telefon numarasını <Text underline>TC kimlik numarasıyla</Text> bulun
							</li>
							<li>
								TC kimlik numarasını <Text underline>telefon numarasıyla</Text> bulun
							</li>
						</ul>
					</Paragraph>
				</Card>
			</Col>

			<Col span={24}>
				<Card
					className="custom-card"
					title={
						<span>
							<IdcardOutlined /> TC PRO - Kişisel Bilgiler
						</span>
					}
					bordered={false}
				>
					<Paragraph>
						<Text strong>TC PRO - Kişisel Bilgiler</Text> sekmesinde vatandaşların kişisel bilgilerini bazı filtre verilerini sağlayarak
						bulabilirsiniz:
					</Paragraph>
					<Paragraph>
						<Text strong>Bulabileceğiniz bilgiler:</Text>
						<ul>
							<li>
								<Text code>TC</Text>
							</li>
							<li>
								<Text code>AD</Text>
							</li>
							<li>
								<Text code>SOYAD</Text>
							</li>
							<li>
								<Text code>GSM</Text>
							</li>
							<li>
								<Text code>BABAADI</Text>
							</li>
							<li>
								<Text code>BABATC</Text>
							</li>
							<li>
								<Text code>ANNEADI</Text>
							</li>
							<li>
								<Text code>ANNETC</Text>
							</li>
							<li>
								<Text code>DOĞUM TARİHİ</Text>
							</li>
						</ul>
						<Text strong>Filtreler:</Text>
						<ul>
							<li>
								<Text code>TC</Text>
							</li>
							<li>
								<Text code>GSM</Text>
							</li>
							<li>
								<Text code>AD</Text>
							</li>
							<li>
								<Text code>SOYAD</Text>
							</li>
						</ul>
					</Paragraph>
				</Card>
			</Col>

			<Col span={24}>
				<Card
					className="custom-card"
					title={
						<span>
							<InfoCircleOutlined /> TC PRO - Aile Bilgileri
						</span>
					}
					bordered={false}
				>
					<Paragraph>
						<Text strong>TC PRO - Aile Bilgileri</Text> sekmesinde bir vatandaşın aile üyelerinin bilgilerini, ilişkilerini{' '}
						<Text strong>TC kimlik numarası</Text> ile bulabilirsiniz.
					</Paragraph>
					<Paragraph>
						<Text strong>Bulabileceğiniz bilgiler:</Text>
						<ul>
							<li>
								<Text code>TC</Text>
							</li>
							<li>
								<Text code>AD</Text>
							</li>
							<li>
								<Text code>SOYAD</Text>
							</li>
							<li>
								<Text code>GSM</Text>
							</li>
							<li>
								<Text code>DOĞUM TARİHİ</Text>
							</li>
							<li>
								<Text code>DOĞUM YERİ</Text>
							</li>
							<li>
								<Text code>ADRES İL</Text>
							</li>
							<li>
								<Text code>ADRES İLÇE</Text>
							</li>
						</ul>
					</Paragraph>
				</Card>
			</Col>
		</Row>
	</div>
)

export default HomeInfo