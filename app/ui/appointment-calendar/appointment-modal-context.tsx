'use client';

import {
	createContext,
	useContext,
	useState,
	ReactNode,
} from 'react';

import { AppointmentType } from '@/app/lib/definitions';

type ModalContextType = {
	selectedAppointment: AppointmentType | null;
	openModal: (appointment: AppointmentType) => void;
	closeModal: () => void;
};

const ModalContext = createContext<ModalContextType | null>(null);

export function AppointmentModalProvider({
	children,
}: {
	children: ReactNode;
}) {
	const [selectedAppointment, setSelectedAppointment] = useState<AppointmentType | null>(null);

	function openModal(
		appointment: AppointmentType
	) {
		setSelectedAppointment(appointment);
	}

	function closeModal() {
		setSelectedAppointment(null);
	}

	return (
		<ModalContext.Provider
			value={{
				selectedAppointment,
				openModal,
				closeModal,
			}}
		>
			{children}
		</ModalContext.Provider>
	);
}

export function useAppointmentModal() {
	const context = useContext(ModalContext);

	if (!context) {
		throw new Error('useAppointmentModal must be used within AppointmentModalProvider');
	}

	return context;
}