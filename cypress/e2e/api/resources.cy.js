import resource from "../../fixtures/resource.json"

describe('Post Module', () => {

    it('Create a  resource successfully', () => {
        cy.request({
            method: 'POST',
            url: 'https://jsonplaceholder.typicode.com/posts',
            body: {
                "title": resource.new_resource.title,
                "body": resource.new_resource.body,
                "userId": resource.new_resource.userId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(201);
            expect(response.body).to.be.an('object');
            expect(response.body).to.have.all.keys('title', 'body', 'userId', 'id');
            expect(response.body.id).to.eq(resource.new_resource.id);
            expect(response.body.title).to.eq(resource.new_resource.title);
            expect(response.body.body).to.eq(resource.new_resource.body);
            expect(response.body.userId).to.eq(resource.new_resource.userId);
        })
    });

    it('Update a resource sucessfully', () => {
        cy.request({
            method: 'PUT',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            body: {
                "id": resource.update_resource.id,
                "title": resource.update_resource.title,
                "body": resource.update_resource.body,
                "userId": resource.update_resource.userId
            },
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('object');
            expect(response.body).to.be.have.all.keys('id', 'title', 'body', 'userId');
            expect(response.body.id).to.eq(resource.update_resource.id);
            expect(response.body.title).to.eq(resource.update_resource.title);
            expect(response.body.body).to.eq(resource.update_resource.body);
            expect(response.body.userId).to.eq(resource.update_resource.userId);
        })
    })

    it('Get the created resource sucessfully', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200),
            expect(response.body).to.be.an('object'),
            expect(response.body).to.be.have.all.keys('userId', 'id', 'title', 'body'),
            expect(response.body.id).to.eq(resource.existing_resource.id);
            expect(response.body.title).to.eq(resource.existing_resource.title);
            expect(response.body.body).to.eq(resource.existing_resource.body);
            expect(response.body.userId).to.eq(1);
        })
    })

    it('Delete an existing resource successfully', () => {
        cy.request({
            method: 'DELETE',
            url: 'https://jsonplaceholder.typicode.com/posts/1',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200)
            expect(response.body).to.be.an('object'),
            expect(response.body).to.be.empty;
        })
    })

    it('Get all posts', () => {
        cy.request({
            method: 'GET',
            url: 'https://jsonplaceholder.typicode.com/posts',
            headers: {
                'Content-Type': 'application/json'
            }
        }).then((response) => {
            expect(response.status).to.eq(200);
            expect(response.body).to.be.an('array');
            expect(response.body.length).to.be.greaterThan(0);
            const firstPost = response.body[0];
            expect(firstPost).to.have.all.keys('userId', 'id', 'title', 'body');
        })
    })
})