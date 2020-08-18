import app from '../../app';
import request from 'supertest';

test('get all category with proper foramt', async (done) => {
  const response = await request(app).get('/api/category');

  console.log(response);
  expect(response.body.length).toBe(17);
  // const createUserId = response.body;
  // User.deleteWithId(createUserId);
  // done();
});

test('Sign will fail with insufficient', async (done) => {
  // given
  // const invalidUserInfo: Partial<ISignUpBody> = {
  // 	userId: "wrong id",
  // 	password: "12345678",
  // };
  // const response = await request(app)
  // 	.post("/api/sign-up")
  // 	.send(invalidUserInfo);
  // // expect(response.body).toEqual(expectedResult)
  // const insufficiendError = new InsufficientBodyError("name");
  // expect(response.status).toBe(insufficiendError.statusCode);
  // // const createUserId = response.body;
  // // console.log(createUserId);
  // // User.deleteWithId(createUserId);
  // done();
});

// test("Sign up with wrong email format", async (done) => {
// 	// given
// 	const invalidUserInfo: UserInfo = {
// 		userId: "fameu6e",
// 		password: "12345678",
// 		email: "io@",
// 		name: "장해민",
// 		phone: "010-5520-3618",
// 	};

// 	// const expectedResult: SignUpResponse = {
// 	//   email: {
// 	//     res: false,
// 	//     err: ErrMsg.invalidEmail,
// 	//   },
// 	// }

// 	const response = await request(app)
// 		.post("/api/sign-up")
// 		.send(invalidUserInfo);

// 	await deleteUser({ userId: invalidUserInfo.userId });

// 	// expect(response.body).toEqual(expectedResult)

// 	done();
// });
