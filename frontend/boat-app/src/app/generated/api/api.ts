export * from './boatController.service';
import { BoatControllerService } from './boatController.service';
export * from './helloController.service';
import { HelloControllerService } from './helloController.service';
export const APIS = [BoatControllerService, HelloControllerService];
