import { Injectable } from '@angular/core';
import { Config } from "../models/config.model";

@Injectable()
export class ConfigOptionsService {
    config: Config;

    Save(config: Config) {
        this.config = config
    }

    SaveFromFields(id: number, login: string, email: string) {
        this.config = new Config(id, login, email);
    }

    GetConfig() {
        return this.config;
    }
}