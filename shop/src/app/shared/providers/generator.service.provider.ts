import { GeneratorService } from "../services/generator.service";


export function generatorServiceFactory (length: number) {
  return new GeneratorService(length);
};