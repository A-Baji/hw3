// Referenced from https://learnopengl.com/Lighting/Basic-Lighting

#version 330 core

layout (location = 0) in vec3 aPos; // Position vector
layout (location = 1) in vec3 aNormal; // Normal vector for each vertex

out vec3 FragPos;
out vec3 Normal;

uniform mat4 model;
uniform mat4 view;
uniform mat4 projection;

void main()
{
    // Calculate fragment position by multiplying vertex position with model matrix
    FragPos = vec3(model * vec4(aPos, 1.0));
    
    // Multiply normal vector by the transpose of the inverse of the model matrix to prevent uneven scaling
    Normal = mat3(transpose(inverse(model))) * aNormal;  
    
    gl_Position = projection * view * vec4(FragPos, 1.0);
}
