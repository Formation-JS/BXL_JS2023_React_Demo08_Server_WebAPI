import argon2 from 'argon2';
import { MemberDTO } from '../dto/member.dto.js';
import memberData from './../data/member.json' assert { type: 'json' };;

const memberService = {

    getById : (id) => {
        const data = memberData.data.find(member => member.id === id);
        return !!data ? new MemberDTO(data) : null;
    },

    getByCredential: async ({ username, password }) => {
        const data = memberData.data.find(member => member.username === username);

        if(!data || !(await argon2.verify(data.password, password))) {
            return null
        }

        return new MemberDTO(data);
    }
}

export default memberService;