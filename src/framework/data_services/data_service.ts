export interface DataService {
  isUnique: (attr: any) => Promise<boolean>;
}
