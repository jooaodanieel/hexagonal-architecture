export interface DataService {
  isUnique: (attr: any) => Promise<boolean>;
  store: (entity: any) => Promise<any>;
}
