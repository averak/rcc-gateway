import { UserModel } from './user.model';

export type ReservationModel = {
  id: number;
  startAt: Date;
  finishAt: Date;
  user: UserModel;
};

export type ReservationsModel = {
  reservations: ReservationModel[];
};
